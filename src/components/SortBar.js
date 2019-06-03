import React from 'react'
import {Form, Radio} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {changeSortValue} from '../redux/actions'

class SortBar extends React.Component {
  componentDidMount() {
    this.props.onSort("unsort")
  }

  render() {
    return (
      <div id="sortbarcontainer">
        <div id="sortbartitle" style={{fontSize: "20px", color: "pink", fontWeight: "bold"}}>
          Sort:&nbsp;&nbsp;&nbsp;
        </div>
        <Form id="sortbar">
          <Form.Field>
            <Radio
              label="Unsort"
              name="sort"
              value="unsort"
              checked={this.props.value === "unsort"}
              onChange={() => this.props.onSort("unsort")}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label="By Name"
              name="sort"
              value="name"
              checked={this.props.value === "name"}
              onChange={() => this.props.onSort("name")}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label="By Weight"
              name="sort"
              value="weight"
              checked={this.props.value === "weight"}
              onChange={() => this.props.onSort("weight")}
            />
          </Form.Field>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    value: state.sortValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSort: value => dispatch(changeSortValue(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortBar)
