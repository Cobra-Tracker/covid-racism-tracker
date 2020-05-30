import React from 'react';
import { Layout } from 'antd';
import { Header } from '../components/NavHeader';
import styles from '../styles/MasterPage.module.less';
import { HomePage } from './HomePage';
import { Route, Switch } from 'react-router-dom';
import { DataPage } from './DataPage';
import { Page404 } from './404Page';
import { SupportPage } from './SupportPage';
import { PartnersPage } from './PartnersPage';
import { AboutPage } from './AboutPage';
interface Props {}

export const Main: React.FC<Props> = () => {
  return (
    <Layout className={styles.MasterLayout}>
      <Header />
      <Layout.Content className={styles.MasterContent}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/data" component={DataPage} />
          <Route exact path="/support" component={SupportPage} />
          <Route exact path="/partners" component={PartnersPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route path="/" component={Page404} />
        </Switch>
      </Layout.Content>
    </Layout>
  );
};