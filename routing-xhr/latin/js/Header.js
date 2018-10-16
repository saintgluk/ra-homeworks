function HeaderComponent ({location}){
  const params = location.pathname.match(/^\/article\/(\d+)\/?$/i);
  let articleId = !!params ? params[1] : false;
    return (
      <nav className="navbar navbar-light bg-light">
        {articleId
          ? <p className="navbar-brand">Уникальный идентификатор статьи: { articleId }</p>
          : <p className="navbar-brand">Статья не выбрана</p> 
        }
      </nav>
    );
}