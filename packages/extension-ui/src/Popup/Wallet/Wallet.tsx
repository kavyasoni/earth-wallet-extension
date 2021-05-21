// Copyright 2019-2021 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ThemeProps } from '../../types';

import { faArrowDown, faArrowUp, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';

import { Header } from '@polkadot/extension-ui/partials';

import logo from '../../assets/polkadot-new-dot-logo.svg';

interface Props extends ThemeProps {
  className?: string;
}

// eslint-disable-next-line space-before-function-paren
const Wallet = function ({ className }: Props): React.ReactElement<Props> {
  const [selectedTab, setSelectedTab] = useState('Assets');

  return (
    <>
      <Header showMenu />
      <div className={className}>
        <img
          className='tokenLogo'
          src={logo}
        />
        <div className='primaryBalanceLabel'>$56,8812.98 USD</div>
        <div className='secondaryBalanceLabel'>12.32 DOT</div>
        <div className='walletActionsView'>
          <div
            className='tokenActionView buyTokenAction'
          >
            <FontAwesomeIcon
              className='tokenActionButton'
              color='#fff'
              icon={faArrowDown}
              size='lg'
            />
            <div className='tokenActionLabel'>Buy</div>
          </div>

          <div
            className='tokenActionView sendTokenAction'
          >
            <FontAwesomeIcon
              className='tokenActionButton'
              color='#fff'
              icon={faArrowUp}
              size='lg'
            />
            <div className='tokenActionLabel'>Send</div>
          </div>

          <div
            className='tokenActionView swapTokenAction'
          >
            <FontAwesomeIcon
              className='tokenActionButton'
              color='#fff'
              icon={faRetweet}
              size='lg'
            />
            <div className='tokenActionLabel'>Swap</div>
          </div>
        </div>

        <div className='tabsView'>
          <div
            className={'tabView ' + (selectedTab === 'Assets' ? 'selectedTabView' : '') }
            onClick={() => setSelectedTab('Assets')}
          >
                  Assets
          </div>
          <div
            className={'tabView ' + (selectedTab === 'Transactions' ? 'selectedTabView' : '') }
            onClick={() => setSelectedTab('Transactions')}
          >
         Transactions
          </div>
        </div>
      </div>
    </>
  );
};

export default styled(Wallet)(({ theme }: Props) => `
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .tokenLogo {
    height: 28px;
    width: 28px;
    margin-bottom: 16px;
    border-radius: 50%;
    border: 1px solid ${theme.subTextColor};
    padding: 4px;
    background-color: ${theme.tokenLogoBackground};
    }

    .primaryBalanceLabel {
    color: ${theme.textColor};
    font-family: ${theme.fontFamily};
    font-size: 30px;
    margin: 12px;
    }

    .secondaryBalanceLabel {
    color: ${theme.subTextColor};
    font-family: ${theme.fontFamily};
    font-size: 20px;
    }

    .walletActionsView {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 18px;
    }

    .tokenActionView {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }

    .tokenActionButton {
    height: 26px;
    width: 26px;
    background-color: ${theme.buttonBackground};
    padding: 10px;
    border-radius: 50%;
    }

    .tokenActionLabel {
    color: ${theme.buttonBackground};
    font-family: ${theme.fontFamily};
    font-size: 16px;
    margin-top: 6px;
    }

    .buyTokenAction {
    }

    .sendTokenAction {
    margin-left: 36px;
    margin-right: 36px;
    }

    .swapTokenAction {
        
    }

    .tabsView {
    height: 46px;
    width: 382px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    }

    .tabView {
    flex: 1;
    height: 46px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: '#f00';
    box-shadow: inset 0 -1px 0 ${theme.buttonBackground};
    }

    .selectedTabView {
    flex: 1;
    height: 46px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 -3px 0 ${theme.buttonBackground};
    }

`);
