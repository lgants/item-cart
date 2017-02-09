var AllItems = React.createClass({
    handleDelete(id) {
        this.props.handleDelete(id);
    },

    // The bind() method binds the id of the item to this, causing the id to be sent as an argument to handleDelete
    render() {
      var items = this.props.items.map((item) => {
          return (
              <div key={item.id}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <button onClick={this.handleDelete.bind(this, item.id)}>Delete</button>
              </div>
          )
      });

      return(
          <div>
              {items}
          </div>
      )
    }
});
