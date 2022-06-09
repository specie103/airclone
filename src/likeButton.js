import React from "react";


class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      liked: !this.state.liked,
    });
  }

  render() {
    const label = this.state.liked ? <i class="bi bi-heart-fill"></i> : <i class="bi bi-heart"></i>;
    return (
      <>
        <i onClick={this.handleClick}> 
          {label}
        </i>
      </>
    );
  }
};


export default LikeButton;

