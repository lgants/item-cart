var Body = React.createClass({
    getInitialState() {
        return { items: [] }
    },
    componentDidMount() {
        // gets data from the server and assigns it to the items object
        $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
    },
    handleSubmit(item) {
        var newState = this.state.items.concat(item);
        this.setState({ items: newState })
    },
    handleDelete(id) {
        // changed syntax of the success function from 'success (response) {}' to 'success: () => {}', otherwise it refered to the promise of the response instead of the component itself
        $.ajax({
            url: `/api/v1/items/${id}`,
            type: 'DELETE',
            success:() => {
               this.removeItemClient(id);
            }
        });
    },
    removeItemClient(id) {
        var newItems = this.state.items.filter((item) => {
            return item.id != id;
        });

        this.setState({ items: newItems });
    },
    handleUpdate(item) {
        $.ajax({
            url: `/api/v1/items/${item.id}`,
            type: 'PUT',
            data: { item: item },
            success: () => {
                this.updateItems(item);
            }
        }
    )},
    updateItems(item) {
        var items = this.state.items.filter((i) => {
          return i.id != item.id });
        items.push(item);

        this.setState({items: items });
    },
    render() {
        return (
            <div>
                <NewItem handleSubmit={this.handleSubmit}/>
                <AllItems items={this.state.items} handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
            </div>
        )
    }
});
