import React, { useState } from 'react';
import { styled } from "styled-components";

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 420px;
    padding: 50px 0px;
`;

const Title = styled.div`
    font-size: 42px;
`;

const Form = styled.form`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;

const Input = styled.input`
    padding: 10px 20px;
    border-radius: 50px;
    border: none;
    width: 100%;
    font-size: 16px;

    &[type="submit"] {
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }

`;

export default function CreateAccount() {
    const [isLoading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { target: {name, value} } = e;
        if(name === "name") {
            setName(value)
        } else if (name === "email") {
            setEmail(value);
        } else if(name === "password") {
            setPassword(value);
        }
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            //create an account
            //set the name of the user
            //redirect to the home page
        } catch(e) {
            //setError
        }
        finally {
            setLoading(false);
        }
        // create an account
        //set the name of the user
        //redirect to the home page
        
        console.log(name, email, password);
    }
    return <Wrapper>
        <Title>Log Into 🙅</Title>
        <Form onSubmit={onSubmit}>
            <Input name='name' value={name} placeholder='Name' type='text' required />
            <Input name='email' value={email}  placeholder='Email' type='email' required />
            <Input onChange={onChange} name='password' value={password}  placeholder='Password' type='password' />
            <Input type='submit' value={isLoading ? "Loading..." : "Create Account"} />
        </Form>
    </Wrapper>
} 