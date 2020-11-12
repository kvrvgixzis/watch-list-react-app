import * as React from 'react';
import { connect } from 'react-redux';
import { showAlert } from '../redux/actions/app';
import { createPost } from '../redux/actions/posts';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  clearInput = () => {
    this.setState({ title: '' });
  };

  formSubmitHandler = (e) => {
    e.preventDefault();
    this.clearInput();

    const { title } = this.state;

    // validate
    if (!title.trim()) {
      this.props.showAlert('Название поста не может быть пустым');
      return;
    }

    const id = Date.now().toString();
    const newPost = { title, id };

    this.props.createPost(newPost);
  };

  changeInputHandler = ({ target: input }) => {
    this.setState((prevState) => ({
      ...prevState,
      [input.name]: input.value,
    }));
  };

  render() {
    return (
      <form onSubmit={this.formSubmitHandler}>
        <div className="form-group">
          <label htmlFor="title">Заголовок</label>
          <input
            className="form-control"
            id="title"
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Создать
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost,
  showAlert,
};

export default connect(null, mapDispatchToProps)(PostForm);
