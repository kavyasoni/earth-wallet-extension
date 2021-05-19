// Copyright 2019-2021 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ThemeProps } from '../types';

import React, { useContext } from 'react';
import styled from 'styled-components';

import logo from '../assets/ew.svg';
import { ActionContext, Box, Button, ButtonArea, List, VerticalSpace } from '../components';
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
        <p>{t<string>('Before we start, just a couple of notes regarding Earth Wallet:')}</p>
        <Box>
          <List>
            <li>{t<string>('We do not send any clicks, pageviews or events to a central server')}</li>
            <li>{t<string>('We do not use any trackers or analytics')}</li>
          </List>
        </Box>
        <p>{t<string>('... we are not in the information collection business (even anonymized).')}</p>
      </div>
      <VerticalSpace />
      <ButtonArea>
        <Button onClick={_onClick}>{t<string>('Understood, let me continue')}</Button>
      </ButtonArea>
    </>
  );
};

export default styled(Welcome)(({ theme }: Props) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    color: ${theme.subTextColor};
    margin-bottom: 6px;
    margin-top: 0;
  }
  .logo {
        height: 148px;
        width: 148px;
        margin: 18px;
        }
`);
