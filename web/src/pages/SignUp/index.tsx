import React from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft} from "react-icons/fi";
import {Form} from '@unform/web';

import Logo from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignUp: React.FC = () => {

    const handleSubmit = (formData: object): void => {
        console.log(formData);
    }

    return (
        <Container>
            <Background />
            <Content>
                <img src={Logo} alt={'GoBarber'} />

                <Form onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>
                    <Input placeholder={'E-mail'} name={'email'} icon={FiMail} />
                    <Input placeholder={'Nome'} name={'name'} icon={FiUser} />
                    <Input type={'password'} placeholder={'Senha'} name={'password'} icon={FiLock} />
                    <Button type={'submit'}>Cadastrar</Button>
                </Form>
                <a href="/create">
                    <FiArrowLeft />
                    Voltar para logon
                </a>

            </Content>
        </Container>
    )
}

export default SignUp;
