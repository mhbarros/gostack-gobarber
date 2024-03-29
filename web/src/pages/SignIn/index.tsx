import React from 'react';
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

import Logo from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignIn: React.FC = () => {
    return (
        <Container>
            <Content>
                <img src={Logo} alt={'GoBarber'} />

                <form>
                    <h1>Faça seu logon</h1>
                    <Input placeholder={'E-mail'} name={'email'} icon={FiMail} />
                    <Input type={'password'} placeholder={'Senha'} name={'password'} icon={FiLock} />
                    <Button type={'submit'}>Entrar</Button>
                    <a href="/forgot">Esqueci minha senha</a>
                </form>
                <a href="/create">
                    <FiLogIn />
                    Criar conta
                </a>

            </Content>
            <Background />
        </Container>
    )
}

export default SignIn;
