// Copyright 2019-2021 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ThemeProps } from '../../types';

import React from 'react';
import styled from 'styled-components';

import { Header } from '@polkadot/extension-ui/partials';

import { Button, ButtonArea } from '../../components';
import useTranslation from '../../hooks/useTranslation';

interface Props extends ThemeProps {
  className?: string;
}

// eslint-disable-next-line space-before-function-paren
const Wallet = function ({ className }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();

  return (
    <>
      <Header showMenu />

      <div className={className || 'containerView'}>
        <ButtonArea>
          <Button>{t<string>('Understood, let me continue')}</Button>
        </ButtonArea>

        <ButtonArea className='secondButton'>
          <Button
          >{t<string>('Understood, let me check')}</Button>
        </ButtonArea>
      </div>
    </>
  );
};

export default styled(Wallet)(({ theme }: Props) => `
    height: 100%
    width: 100%
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: '#f00';

  .containerView {
      height: 100%
      width: 100%
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: '#f00';
  }

  .secondButton{
    flex: 1
    background-color: '#f00';
    color: ${theme.subTextColor};
    margin-top: 16px;
    margin-top: 0;
  }

`);
