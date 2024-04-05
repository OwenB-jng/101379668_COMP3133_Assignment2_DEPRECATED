import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GET_ALL_EMPLOYEES } from './graphql/queries';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  constructor(private apollo: Apollo) {}

  getAllEmployees(): Observable<any[]> {
    return this.apollo
      .watchQuery({
        query: GET_ALL_EMPLOYEES,
      })
      .valueChanges.pipe(
        map((result: any) => result?.data?.getAllEmployees)
      );
  }

  // Add this method for the login query
  login(usernameOrEmail: string, password: string): Observable<any> {
    const LOGIN_QUERY = gql`
      query Login($usernameOrEmail: String!, $password: String!) {
        login(usernameOrEmail: $usernameOrEmail, password: $password) {
          // ...specify fields you want to retrieve, for example id, username, etc.
        }
      }
    `;

    return this.apollo
      .query({
        query: LOGIN_QUERY,
        variables: {
          usernameOrEmail,
          password,
        },
      })
      .pipe(
        map((result: any) => result?.data?.login)
      );
  }
}
