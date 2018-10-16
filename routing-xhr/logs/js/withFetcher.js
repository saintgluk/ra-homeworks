function withFetcher(WrappedComponent, {url, collName}) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                [collName]: []
            };
        }
    
        componentDidMount() {
          const reqHeaders = new Headers({
            'Content-Type': 'application/json'
          })
    
          fetch(url, {
            method: 'GET',
            // headers: reqHeaders,
          })
          .then(response => response.json())
          .then((result) => this.setState({[collName]:result}))
        }
    
        render() {
          const data = this.state[collName];
          const props = {
            [collName]: data
          }
    
          return (
            <WrappedComponent {...props} {...this.props}/>
          );
        }
    }
}