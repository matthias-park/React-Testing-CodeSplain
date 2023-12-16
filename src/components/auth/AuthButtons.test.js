import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { createServer } from "../../test/server";
import AuthButtons from './AuthButtons';

// createServer() ---> GET '/api/user' ---> {user:null}
test('when user is not sign in, sign in the sign up are visible', async () => {

});

test('test user is not signed in, sign out is not visible', async () => {

});

// createServer() ---> GET '/api/user' ---> { user: {id: 3, email: 'asdf@a.com}}
test('when user is signed in, sign in and sign up are not visible', async () => {

})

test('when user is signed in, sign out is visible', async () => {

})