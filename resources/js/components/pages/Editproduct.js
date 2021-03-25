import React, { Component } from 'react';
import MyGlobleSetting from './MyGlobleSetting';
class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productTitle: '',
      productBody: ''
    }
  }
  
  componentDidMount(){
    // Router laravel
    axios.get(MyGlobleSetting.url + '/api/products/' + this.props.match.params.id + '/edit')
    .then(response => {
      this.setState({ productTitle: response.data.title, productBody: response.data.body });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
 
  isChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value
    });
  }
 
  handleSubmit (event) {
    event.preventDefault();
    const product = {
      title: this.state.productTitle,
      body: this.state.productBody  
    }
    let uri = MyGlobleSetting.url + '/api/products/' + this.props.match.params.id;
    axios.patch(uri, product).then((response) => {
      this.props.history.push('/product');
    });
  }
    render() {
      return (
      <div>
        <h1>Update Product</h1>
        <div className="row">
          <div className="col-md-9"></div>
        </div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Product Title:</label>
                <input type="text" className="form-control" name="productTitle" defaultValue={this.state.productTitle} onChange={(event) => {this.isChange(event)}}/>
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Product Body:</label>
                  <input type="text" className="form-control" name="productBody" value={this.state.productBody} onChange={(event) => {this.isChange(event)}}/>
                </div>
              </div>
            </div><br />
            <div className="form-group">
              <button className="btn btn-primary">Update Product</button>
            </div>
        </form>
  </div>
      )
    }
}
export default EditProduct;