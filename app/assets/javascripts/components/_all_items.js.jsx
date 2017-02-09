var AllItems = React.createClass({
    handleDelete(id) {
        this.props.handleDelete(id);
    },
    onUpdate(item) {
        this.props.onUpdate(item);
    },
    // The bind() method binds the id of the item to this, causing the id to be sent as an argument to handleDelete
    render() {
      var items = this.props.items.map((item) => {
          return (
            <div key={item.id}>
                <Item item={item}
                      handleDelete={this.handleDelete.bind(this, item.id)}
                      handleUpdate={this.onUpdate}/>
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
