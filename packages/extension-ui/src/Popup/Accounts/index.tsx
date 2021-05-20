// Copyright 2019-2021 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useContext } from 'react';
import styled from 'styled-components';

import { AccountContext } from '../../components';
import Wallet from '../Wallet/Wallet';
import AddAccount from './AddAccount';

function Accounts (): React.ReactElement {
  const { hierarchy } = useContext(AccountContext);

  return (
    <>
      {(hierarchy.length === 0)
        ? <AddAccount />
        : (
          <Wallet />
        )
      }
    </>
  );
}

export default styled(Accounts)`
  height: 100%;
  overflow-y: scroll;
  margin-top: -25px;
  padding-top: 25px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
