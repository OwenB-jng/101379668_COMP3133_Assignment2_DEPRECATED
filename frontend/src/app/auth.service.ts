import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface User {
  _id: string;
  username: string;
}

export interface AuthResponse {
  user: User;
  token: string; // Assuming your backend will return a token
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private apollo: Apollo) {}

  login(usernameOrEmail: string, password: string): Observable<AuthResponse> {
    const LOGIN_QUERY = gql`
      query Login($usernameOrEmail: String!, $password: String!) {
        login(usernameOrEmail: $usernameOrEmail, password: $password) {
          _id
          username
          password
        }
      }
    `;
  
    return this.apollo.watchQuery<{ login: AuthResponse | null }>({
      query: LOGIN_QUERY,
      variables: {
        usernameOrEmail,
        password
      },
      fetchPolicy: 'network-only' // This ensures the query will go to the server every time and won't return cached results
    }).valueChanges.pipe(
      map(response => {
        // Check if 'data' and 'login' exist in the response
        if (response.data && response.data.login) {
          return response.data.login;
        } else {
          // Throw an error or return a default value if login data is not present
          throw new Error('Login data is not available');
        }
      })
    );
  }
}