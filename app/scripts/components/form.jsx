var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');

var PhotoAddForm = React.createClass({
  getInitialState: function(){
    return {url: '', title: '', caption: ''};
  },
  addImage: function(event){
    event.preventDefault();
    console.log("clicked");
    this.props.addImage(this.state);

  },
  handleUrl: function(event){
    this.setState({url: event.target.value});
  },
  handleTitle: function(event){
    this.setState({title: event.target.value});
  },
  handleCaption: function(event){
    this.setState({caption: event.target.value});
  },
  render: function(){

    return (
      <div>
        <form onSubmit={this.addImage}>
          <div className="form-group">
            <input type="text" className="form-control new-img-url" placeholder="New Image URL" value={this.state.url} onChange={this.handleUrl}/>
            <input type="text" className="form-control new-title" placeholder="New Image Title" value={this.state.title} onChange={this.handleTitle} />
            <input type="text" className="form-control new-caption" placeholder="New Image Caption" value={this.state.caption} onChange={this.handleCaption}/>
            <button className="btn btn-primary submit" type="button">Submit</button>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = {
  PhotoAddForm
};
