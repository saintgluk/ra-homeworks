class Article extends React.Component {
  render() {
    const articleItems = articles.map((item, key) => (<article className="article" key={key}>
                                                        <h2>{item.subject}</h2>
                                                        <p>{item.body}</p>
                                                      </article>));
    return (
      <main className="container">
        {articleItems}
      </main>
    );
  }
}