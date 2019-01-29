import './Footer.scss';
import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { Icon } from 'antd';

const version = process.env.version;
class Footer extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    footList: PropTypes.array
  };
  render() {
    return (
      <div className="footer-wrapper">
        <Row className="footer-container">
          {this.props.footList.map(function(item, i) {
            return (
              <FootItem
                key={i}
                linkList={item.linkList}
                title={item.title}
                iconType={item.iconType}
              />
            );
          })}
        </Row>
      </div>
    );
  }
}

class FootItem extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    linkList: PropTypes.array,
    title: PropTypes.string,
    iconType: PropTypes.string
  };
  render() {
    return (
      <Col span={6}>
        <h4 className="title">
          {this.props.iconType ? <Icon type={this.props.iconType} className="icon" /> : ''}
          {this.props.title}
        </h4>
        {this.props.linkList.map(function(item, i) {
          return (
            <p key={i}>
              <a href={item.itemLink} className="link">
                {item.itemTitle}
              </a>
            </p>
          );
        })}
      </Col>
    );
  }
}

Footer.defaultProps = {
  footList: [
    {
      title: 'GitHub',
      iconType: 'github',
      linkList: [
        {
          itemTitle: 'YApi 源码仓库',
          itemLink: 'https://github.com/cnstrong-frontend/yapi'
        }
      ]
    },
    {
      title: '团队',
      iconType: 'team',
      linkList: [
        {
          itemTitle: '施强前端团队',
          itemLink: 'https://github.com/cnstrong-frontend/'
        }
      ]
    },
    {
      title: '反馈',
      iconType: 'aliwangwang-o',
      linkList: [
        {
          itemTitle: 'Github Issues',
          itemLink: 'https://github.com/cnstrong-frontend/yapi/issues'
        },
        {
          itemTitle: 'Github Pull Requests',
          itemLink: 'https://github.com/cnstrong-frontend/yapi/pulls'
        }
      ]
    },
    {
      title: 'Copyright © 2018 cnstrong-frontend',
      linkList: [
        {
          itemTitle: `版本更新日志: ${version} `,
          itemLink: 'http://192.168.20.228:8090/pages/viewpage.action?pageId=27885791'
        },
        {
          itemTitle: '使用文档',
          itemLink: 'https://yapi.ymfe.org'
        }
      ]
    }
  ]
};

export default Footer;
