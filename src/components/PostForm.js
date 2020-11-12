import * as React from 'react';

export class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  formSubmitHandler = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.formSubmitHandler}>
        <div className="form-group">
          <label htmlFor="title">Заголовок</label>
          <input className="form-control" id="title" type="text" />
        </div>
        <button className="btn btn-success" type="submit">
          Создать
        </button>
      </form>
    );
  }
}
