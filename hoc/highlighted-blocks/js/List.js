'use strict';

const List = props => {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <PopularNewVideo {...item} />
                );

            case 'article':
                return (
                    <PopularNewArticle {...item} />
                );
        }
    });
};

const PopularNewVideo = popularNewHoc(Video, Popular, New);
const PopularNewArticle = popularNewHoc(Article, Popular, New);

function popularNewHoc(OriginalComponent, WrappedComponentPopular, WrappedComponentNew) {
  return class extends React.Component {
    render() {
			if(this.props.views >= 1000){
				return (
					<WrappedComponentPopular>
						<OriginalComponent {...this.props} />
					</WrappedComponentPopular>);
			} else if (this.props.views < 100){
				return (
					<WrappedComponentNew>
						<OriginalComponent {...this.props} />
					</WrappedComponentNew>);
			}
      return (
				<OriginalComponent {...this.props} />
			);
    }
  };
}