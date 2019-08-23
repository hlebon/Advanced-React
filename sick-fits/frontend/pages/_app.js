import App, { Container } from "next/app";
import PageComponent from "../components/Page";

class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <PageComponent>
          <Component/>
        </PageComponent>
      </Container>
     );
  }
}

export default MyApp;