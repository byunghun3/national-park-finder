import React, { FC } from "react";
import { IUser } from "../interfaces/Interfaces";
import styled from "styled-components";

interface LoginProps {
    modalRef: () => void;
    name: string | null;
    username: string | null;
    password: string | null;
    handleChangeName: React.ChangeEventHandler<HTMLInputElement>;
    handleChangeUsername: React.ChangeEventHandler<HTMLInputElement>;
    handleChangePassword: React.ChangeEventHandler<HTMLInputElement>;
    handleSignUp: React.FormEventHandler<HTMLFormElement>;
    handleCloseModal: React.MouseEventHandler<HTMLButtonElement>;
    handleLogin: React.FormEventHandler<HTMLFormElement>;
    handleLogOut: React.FormEventHandler<HTMLFormElement>;
    showSignUp: boolean;
    setShowSignUp: React.Dispatch<React.SetStateAction<boolean>>;
    passwordLengthError: boolean;
    userExistsError: boolean;
    invalidUserError: boolean;
}

const Modal = styled.div`
    position: fixed;
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
    width: 50vw;
    border: solid darkslategrey;
    background-color: white;
    color: black;

    @media (max-width: 800px) {
        width: 80vw;
    }

    @media (max-width: 499px) {
        height: 80vh;
    }
`;

const LogOutForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    font-size: 1.8rem;
`;

const Label = styled.span`
    font-weight: 900;
`;

const LogOutButton = styled.button`
    border: none;       
    background: none;
    color: darkslategrey;
    font-family: "Prompt";
    font-size: 2rem;
    cursor: pointer;

    &:hover {
        color: maroon;
    }
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 90%;
`;

const FormInput = styled.input`
    height: 5.5rem;
    width: 25rem;
    padding-left: 1rem;
    margin: 1.5% 0;
    border: solid lightgray 1px;
    border-radius: 2%;
    font-size: 1.5rem;

    &::placeholder {
        font-family: "Prompt";
    }

    @media (max-width: 499px) {
        width: 50vw;
    }
`;

const LoginButton = styled.button`
    border: none;       
    background: none;
    color: darkslategrey;
    font-family: "Prompt";
    font-size: 2rem;
    cursor: pointer;

    &:hover {
        color: maroon;
    }
`;

const SignUpButton = styled.button`
    border: none;       
    background: none;
    color: darkslategrey;
    font-family: "Prompt";
    font-size: 2rem;
    cursor: pointer;

    &:hover {
        color: maroon;
    }
`;

const ChangeFormButton = styled.button`
    border: none;       
    background: none;
    color: #975f27;
    font-family: "Prompt";
    font-size: 2rem;
    cursor: pointer;

    &:hover {
        color: maroon;
    }
`;

const SignUpForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
`;

const ErrorText = styled.div`
    color: red;
    font-familiy: "Prompt";
    font-size: 1.8rem;
`;

const CloseButton = styled.button`
    background-color: white;
    font-family: "Prompt";
    font-size: 1.8rem;
    cursor: pointer;

    &:hover {
        background-color: black;
        color: white;
    }
`;

export const Login: FC<LoginProps> = ({ modalRef, name, username, password, handleChangeName,
    handleChangeUsername, handleChangePassword, handleSignUp, handleCloseModal,
    handleLogin, handleLogOut, showSignUp, setShowSignUp, passwordLengthError,
    userExistsError, invalidUserError }) => {
    const loggedInUser: IUser[] = JSON.parse(localStorage.getItem("loggedInUser") || "[]");

    return (
        <Modal ref={modalRef}>
            {loggedInUser ?
                <LogOutForm onSubmit={handleLogOut}>
                    <div>
                        <Label>Name:</Label> {loggedInUser.user.name}
                    </div>
                    <div>
                        <Label>Username:</Label> {loggedInUser.user.username}
                    </div>
                    <LogOutButton type="submit">Log Out</LogOutButton>
                    <CloseButton type="button" onClick={handleCloseModal}>Close</CloseButton>
                </LogOutForm > :
                (showSignUp ?
                    <SignUpForm onSubmit={handleSignUp}>
                        <FormInput
                            label="Name"
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={handleChangeName}
                            required
                        />
                        <FormInput
                            label="Username"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={handleChangeUsername}
                            required
                        />
                        <FormInput
                            label="Password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handleChangePassword}
                            required
                        />
                        <SignUpButton type="submit">Sign Up</SignUpButton>
                        {passwordLengthError && <ErrorText>Password must be at least 6 characters</ErrorText>}
                        {userExistsError && <ErrorText>User already exists</ErrorText>}
                        <ChangeFormButton type="click" onClick={setShowSignUp}>Back to Login</ChangeFormButton>
                        <CloseButton type="button" onClick={handleCloseModal}>Close</CloseButton>
                    </SignUpForm> :
                    <LoginForm onSubmit={handleLogin}>
                        <FormInput
                            label="Username"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={handleChangeUsername}
                            required
                        />
                        <FormInput
                            label="Password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handleChangePassword}
                            required
                        />
                        <LoginButton type="submit">Login</LoginButton>
                        {invalidUserError && <ErrorText>Invalid username or password</ErrorText>}
                        <ChangeFormButton type="click" onClick={setShowSignUp}>Don&apos;t have an account? Sign Up</ChangeFormButton>
                        <CloseButton type="button" onClick={handleCloseModal}>Close</CloseButton>
                    </LoginForm>
                )
            }
        </Modal>
    );
};