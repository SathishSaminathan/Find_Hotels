import React, { Component } from "react";
import { Row, Col, Pagination } from "antd";
import { debounce } from "lodash";
import axios from "axios";

import CardItems from "./CardItems";

class FindHome extends Component {
  state = {
    SearchKey: "chi",
    Details: null
  };

  handleChange = debounce(searchString => {
    console.log(searchString);
    this.setState({
      SearchKey: searchString
    });
    this.fetchList(this.state.SearchKey);
  }, 1000);

  componentDidMount() {
    this.fetchList(this.state.SearchKey);
  }

  fetchList = searchString => {
    axios
      .get(
        `https://www.swiggy.com/dapi/restaurants/search?lat=11.0202345&lng=77.0133381&str=${searchString}&trackingId=6f0f05bb-7fdf-5bc1-f3ab-5a11f632b4ab`,
        {
          headers: {
            "Access-Control-Allow-Headers": "access-control-allow-origin",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
            "Access-Control-Allow-Origin": "*",
            Allow: "POST, GET, OPTIONS, PUT, DELETE"
          }
        }
      )
      //   axios({
      //     method: "get",
      //     url:"https://www.swiggy.com/dapi/restaurants/search?lat=11.0202345&lng=77.0133381&str=chi&trackingId=6f0f05bb-7fdf-5bc1-f3ab-5a11f632b4ab",
      //     headers: {
      //         "Access-Control-Allow-Headers": "access-control-allow-origin",
      //         "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
      //         "Access-Control-Allow-Origin": "*",
      //         "Allow": "POST, GET, OPTIONS, PUT, DELETE"
      //       },
      //   })
      .then(res => {
        let result = res.data.data.restaurants[0].restaurants;
        if (res) {
          this.setState(() => {
            return {
              Details: result
            };
          });
          console.log("with state", this.state.Details);
        }
      });
  };

  render() {

    const {Details}=this.state;
    
    return (
      <React.Fragment>
        <Row type="flex" align="middle">
          <Col span={20}>
            <div id="wrap">
              <form action="">
                <input
                  id="search"
                  name="search"
                  type="text"
                  placeholder="What're we looking for ?"
                  onChange={e => this.handleChange(e.target.value)}
                />
                <input id="search_submit" value="Rechercher" type="submit" />
              </form>
            </div>
          </Col>
          <Col span={22} >
            <CardItems CardDetails={Details && Details}/>
          </Col>
          <Col span={20}>
            <Pagination defaultCurrent={1} total={50} />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default FindHome;
