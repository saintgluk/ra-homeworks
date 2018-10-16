class App extends React.Component {
    render() {
      return (
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/subscribtion" component={SubscribtionPage} />
              <Route path="/article/:id" component={ArticlePage} />
            </Switch>
          </div>
        </Router>
      );
    }
  }