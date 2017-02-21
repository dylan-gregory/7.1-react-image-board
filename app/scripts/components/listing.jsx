var React = require('react');

var Image = require('../models/image.js').Image;
var ImageCollection = require('../models/image.js').ImageCollection;
var PhotoAddForm = require('./form.jsx').PhotoAddForm;

var ImageBoard = React.createClass({
  componentWillMount: function(){
    var self = this;
    this.state.photos.fetch().done(function(){
      self.forceUpdate();
    });
  },
  getInitialState: function(){
    var photos = new ImageCollection();
    return {photos: photos};
  },
  addImage: function(photo){
    var images = this.state.photos;
    images.create(photo);
    this.setState({photos: images});
  },
  deletePost: function(){
    ReactDOM.unmountComponentAtNode(this.state.photos);
  },
  render: function(){

    return (
    <div>
      <PhotoAddForm addImage={this.addImage} />
      <ImageList photos={this.state.photos} />
    </div>
    )
  }
});


var ImageList = React.createClass({
  isEditing: function(){

  },
  // deletePost: function(){
  //   ReactDOM.unmountComponentAtNode(this.state.photos);
  // },
  render: function(){
    var listedPhotos = this.props.photos.map(function(photo){

      return (
          <div className="col-sm-6 col-md-4" key={photo.cid}>
            <div className="thumbnail">
              <img src={photo.get('url')} />
              <div className="caption">
                <h3>{photo.get('title')}</h3>
                <p>{photo.get('caption')}</p>
                <p><a href="#" className="btn btn-primary" role="button">Edit</a><a href="#" className="btn btn-danger" role="button">Delete</a></p>
              </div>
            </div>
          </div>
      )


    });

    return (
      <div>
        <h2>My Photos</h2>
        <div>{listedPhotos}</div>
      </div>
    )
  }
});

module.exports = {
  ImageList,
  ImageBoard
};
