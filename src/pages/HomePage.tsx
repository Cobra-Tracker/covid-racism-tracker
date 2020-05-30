import React from 'react';
import { Row, Col, Layout, Button } from 'antd';
import styles from '../styles/HomePage.module.less';
import { TwitterCircleFilled, LinkedinFilled, MailFilled } from '@ant-design/icons';
interface Props {}
export const HomePage: React.FC<Props> = () => {
  return (
    <Layout.Content>
      <Row justify="center">
        <Col className={styles.HomePageColumnContent}>
          <h1 className={styles.h1}>Tracking Racism Around COVID-19 on Twitter</h1>
        </Col>
      </Row>
      <Row justify="center">
        <Col className={styles.HomePageColumnContent}>
          <p>
            Project NAME is monitoring real-time racist rhetoric on Twitter. There is evidence that online hate speech predicts hate crime and human rights groups have argued that
            exposure to online hate speech normalizes such hatred for majority groups.
          </p>
        </Col>
      </Row>
      <Row justify="center" className={styles.ActionButtonsRow}>
        <Col>
          <Button size="large" autoFocus={true} className={styles.ActionButton}>
            See Data
          </Button>
        </Col>
        <Col>
          <Button size="large" className={styles.ActionButton}>
            Get Support
          </Button>
        </Col>
      </Row>
      <Row justify="center" className={styles.SocialIconsRow}>
        <Col>
          <TwitterCircleFilled style={{ fontSize: '48px' }} className={styles.HomeSocialIcons} />
        </Col>
        <Col>
          <LinkedinFilled style={{ fontSize: '48px' }} className={styles.HomeSocialIcons} />
        </Col>
        <Col>
          <MailFilled style={{ fontSize: '48px' }} className={styles.HomeSocialIcons} />
        </Col>
      </Row>
    </Layout.Content>
  );
};