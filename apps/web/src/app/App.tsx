import { Layout, Typography } from "antd"

import styles from "@/app/App.module.css"

const { Content, Header } = Layout

export function App() {
  return (
    <Layout className={styles.app}>
      <Header>
        <Typography.Text strong style={{ color: "white" }}>
          CarLog
        </Typography.Text>
      </Header>

      <Content className={styles.content}>
        <Typography.Title level={2}>CarLog</Typography.Title>
        <Typography.Text>Приложение готово к разработке.</Typography.Text>
      </Content>
    </Layout>
  )
}
