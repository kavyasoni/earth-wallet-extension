// Copyright 2019-2021 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ThemeProps } from '../../types';

import { faFileUpload, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';

import { ActionContext } from '../../components';
import useTranslation from '../../hooks/useTranslation';
import Header from '../../partials/Header';
import AddAccountImage from './AddAccountImage';

interface Props extends ThemeProps {
  className?: string;
}

function AddAccount ({ className }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const onAction = useContext(ActionContext);
  const _onClick = useCallback(
    () => onAction('/account/create'),
    [onAction]
  );

  const _openJson = useCallback(
    () => onAction('/account/restore-json'),
    [onAction]
  );
  const _importSeed = useCallback(
    () => onAction('/account/import-seed'),
    [onAction]
  );

  return (
    <>
      <Header
        showAdd
        showSettings
        text={t<string>('Add Account')}
      />
      <div className={className}>
        <div className='image'>
          <AddAccountImage onClick={_onClick}/>
        </div>
        <div className='no-accounts'>
          <p>{t<string>('Create a new wallet and seed phrase.')}</p>
        </div>
        <div className='otherActionsView'>

          <div className='otherActionView'
            onClick={_importSeed}>
            <FontAwesomeIcon
              icon={faKey}
              size='lg'
            />
            <div className='otherActionLabel'>{t<string>('Import account from existing seed')}</div>
          </div>

          <div className='verticalDivider' />

          <div className='otherActionView'
            onClick={_openJson}>
            <FontAwesomeIcon
              icon={faFileUpload}
              size='lg'
            />
            <div className='otherActionLabel'>{t<string>('Restore account from JSON file')}</div>
          </div>

        </div>
      </div>
    </>
  );
}

export default React.memo(styled(AddAccount)(({ theme }: Props) => `
  color: ${theme.textColor};
  height: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    color: ${theme.textColor};
    margin-top: 0;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
  }

  > .image {
    display: flex;
    justify-content: center;
  }

  .no-accounts p {
    text-align: center;
    font-size: 16px;
    line-height: 26px;
    margin: 0 30px;
    color: ${theme.subTextColor};
  }

  .otherActionLabel {
    margin-top: 16px;
    text-align: center;
    font-size: 16px;
    color: ${theme.subTextColor};
  }

  > .otherActionsView {
    height: 100%;
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    padding: 24px 0;
    border-top: 1px solid ${theme.backButtonBackgroundHover};
  }

  .verticalDivider {
    height: 100%;
    width:1px;
    background-color: ${theme.backButtonBackgroundHover};
  }

  .otherActionView {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor:pointer;
  }

  .otherActionView:hover {
    background-color: ${theme.backButtonBackgroundHover};
    cursor:pointer;
  }
`));
