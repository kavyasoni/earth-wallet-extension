// Copyright 2019-2021 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ThemeProps } from '../types';

import React, { useContext } from 'react';
import styled from 'styled-components';

import logo from '../assets/ew.svg';
import { ActionContext, Button } from '../components';
import useTranslation from '../hooks/useTranslation';

interface Props extends ThemeProps {
  className?: string;
}

const Welcome = function ({ className }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const onAction = useContext(ActionContext);

  const _onClick = (): void => {
    window.localStorage.setItem('welcome_read', 'ok');
    onAction();
  };

  return (
    <>
      <div className={className}>
        <img
          className='logo'
          src={logo}
        />
        <div className='welcomeText'>Welcome to Earth Wallet</div>
        <div className='welcomeInfo'>Connecting you to Polkadot and the Decentralized Web.</div>
        <Button className='getStartButton'
          onClick={_onClick}>{t<string>("Let's get started")}</Button>
      </div>
    </>
  );
};

export default styled(Welcome)(({ theme }: Props) => `
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .welcomeText {
    color: ${theme.textColor};
    font-family: ${theme.fontFamily};
    font-size: 22px;
    margin-top: 36px;
    text-align: center;
  }

  .welcomeInfo {
    color: ${theme.subTextColor};
    font-family: ${theme.fontFamily};
    font-size: 14px;
    margin-bottom: 16px;
    margin-top: 10px;
    text-align: center;
  }

  .logo {
    height: 148px;
    width: 148px;
    }

`);
