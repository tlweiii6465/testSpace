import React, { Component } from "react";
import { Container, Content, Tab, Tabs, ScrollableTab, Header, Button, Text, Grid, Col, Row, Icon, TabHeading, Spinner } from "native-base";
import { View,Alert,NetInfo, StyleSheet, Image,ActivityIndicator } from "react-native";
import DatePicker from "react-native-datepicker";
import moment from "moment";
import _ from "lodash";
import FastImage from "react-native-fast-image";
// import SvgUri from 'react-native-svg-uri';

class ResultComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            resultList: [],
            date: moment().format("YYYY-MM-DD"),
            imgurls: {
                "M": require("./asset/magnum.png"),
                "GD": require("./asset/HL.png"),
                "SG": require("./asset/sg.png"),
                "PMP": require("./asset/damacai.png"),
                "ST": require("./asset/toto.png"),
                "STC": require("./asset/sandakan.png"),
                "CS": require("./asset/cash.png"),
                "EE": require("./asset/88.png"),
            }
        };
    }


    componentDidMount() {
        // this.animation.play();
        //INTERNET CONNECTION
        // NetInfo.isConnected.fetch().done((isConnected) => {
        //   console.log('First, is ' + (isConnected ? 'online' : 'offline'));
        // });
        // function handleFirstConnectivityChange(isConnected) {
        //   console.log('Then, is ' + (isConnected ? 'online' : 'offline'));
        //   NetInfo.isConnected.removeEventListener(
        //     'change',
        //     handleFirstConnectivityChange
        //   );
        // }
        // NetInfo.isConnected.addEventListener(
        //   'change',
        //   handleFirstConnectivityChange
        // );

        this.props.getResultList(this.state.date);
        //added before commit
    }

    componentWillReceiveProps(nextProps) {

        let resultListFormated = [];

        resultListFormated = _.filter(nextProps.resultList, function (o) {
            let regex = /JP/;
            let matches = o.type.match(regex);
            return !matches;
        });

        this.setState({
            isFetching: nextProps.isFetching,
            // isFetching: false,
            result: nextProps.result,
            resultList: resultListFormated || []
        });

    }

  render() {
    return (
      <Container>
        {/* <Header hasTabs /> */}
        
        <Tabs>
                {this.state.resultList.map((details, index) => {
                    let regex = /JP/;
                    let matches = details.type.match(regex);
                    if (!matches) {
                        return (
                            <Tab
                                heading={
                                    <TabHeading>
                                        <FastImage
                                            style={{ width: 30, height: 30 }}
                                            source={this.state.imgurls[details.type]}
                                            defaultSource={this.state.imgurls[details.type]}
                                        />
                                        {/* <SvgUri width="30" height="30" source={this.state.imgurls[details.type]} /> */}
                                        {/* <Text>{details.type}</Text> */}
                                    </TabHeading>
                                }
                                // heading=""
                                key={index} >
                                <Row style={{ height: 50, alignSelf: "center" }}>

                                    <Text style={{ alignSelf: "center", textAlign: "right", padding: 10 }}>Date:</Text>
                                    <DatePicker
                                        style={{ flex: 1, alignSelf: "center" }}
                                        date={this.state.date}
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        maxDate={moment().format("YYYY-MM-DD")}
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                            dateIcon: {
                                                display: "none",
                                                position: "absolute",
                                                left: 0,
                                                top: 4,
                                                marginLeft: 0
                                            },
                                            dateInput: {
                                                // marginLeft: 36,
                                                borderRadius: 20
                                            }
                                            // ... You can check the source to find the other keys.
                                        }}
                                        onDateChange={(date) => {
                                            this.setState({ date: date });
                                            this.props.getResultList(date);
                                        }}
                                    />
                                    <Text style={{ alignSelf: "center", padding: 10 }}>{moment(this.state.date).format("ddd")}</Text>
                                    <Text style={{ alignSelf: "center", padding: 10 }}>{details.fdData.dn}</Text>
                                </Row>
                                <ResultTab data={details.fdData} />
                            </Tab>
                        );
                    }
                } )}
            </Tabs>
            
      </Container>
    );
  }
}

const ResultTab =  ({ data, style }) => {
    const {
        topPrizeLabelBox,
        topPrizeLabel,
        topPrizeBox,
        topPrize,
        rowContainer,
        special,
        emptyText,
        dividerText
     } = styles;
    return (
        <Container >
            <Grid style={{ flex: 1 }}>
                <Row style={{ flex: 3 }}>
                    <Col style={topPrizeLabelBox}>
                        <Row style={{ justifyContent: "center" }} ><Text style={topPrizeLabel}>1st Prize</Text></Row>
                        <Row style={{ justifyContent: "center" }} ><Text style={topPrizeLabel}>2nd Prize</Text></Row>
                        <Row style={{ justifyContent: "center" }} ><Text style={topPrizeLabel}>3rd Prize</Text></Row>
                    </Col>
                    <Col style={topPrizeBox}>
                        <Row style={{ justifyContent: "center", borderBottomWidth: 1 }} ><Text style={topPrize}>{data.n1}</Text></Row>
                        <Row style={{ justifyContent: "center", borderBottomWidth: 1 }} ><Text style={topPrize}>{data.n2}</Text></Row>
                        <Row style={{ justifyContent: "center", borderBottomWidth: 1 }} ><Text style={topPrize}>{data.n3}</Text></Row>
                    </Col>
                </Row>
                <Row style={dividerText} >
                    <Text >Special</Text>
                </Row>
                <Row style={rowContainer}>
                    <Text style={special}>{data.s1}</Text>
                    <Text style={special}>{data.s2}</Text>
                    <Text style={special}>{data.s3}</Text>
                    <Text style={special}>{data.s4}</Text>
                    <Text style={special}>{data.s5}</Text>
                </Row>
                <Row style={rowContainer}>
                    <Text style={special}>{data.s6}</Text>
                    <Text style={special}>{data.s7}</Text>
                    <Text style={special}>{data.s8}</Text>
                    <Text style={special}>{data.s9}</Text>
                    <Text style={special}>{data.s10}</Text>
                </Row>
                <Row style={rowContainer}>
                    <Text style={emptyText}
                    />
                    <Text style={special}>{data.s11}</Text>
                    <Text style={special}>{data.s12}</Text>
                    <Text style={special}>{data.s13}</Text>
                    <Text style={emptyText} />
                </Row>
                <Row style={dividerText} >
                    <Text >Consolation</Text>
                </Row>
                <Row style={rowContainer}>
                    <Text style={special}>{data.c1}</Text>
                    <Text style={special}>{data.c2}</Text>
                    <Text style={special}>{data.c3}</Text>
                    <Text style={special}>{data.c4}</Text>
                    <Text style={special}>{data.c5}</Text>
                </Row>
                <Row style={rowContainer}>
                    <Text style={special}>{data.c6}</Text>
                    <Text style={special}>{data.c7}</Text>
                    <Text style={special}>{data.c8}</Text>
                    <Text style={special}>{data.c9}</Text>
                    <Text style={special}>{data.c10}</Text>
                </Row>
            </Grid>
        </Container>
    );
};

const styles = StyleSheet.create({
    topPrizeLabelBox: {
        borderColor: "black",
        borderWidth: 1,
        marginLeft: 10,
        backgroundColor: "#c4c3cb"
    },
    topPrizeBox: {
        borderColor: "black",
        borderWidth: 1,
        marginRight: 10
    },
    topPrizeLabel: {
        alignSelf: "center"
    },
    topPrize: {
        textAlign: "center",
        borderBottomWidth: 1,
        alignSelf: "center"
    },
    special: {
        borderColor: "black",
        borderWidth: 1,
        textAlign: "center",
        padding: 10,
        alignSelf: "center",
        flex: 1,
    },
    normalHeight: {
        height: 10
    },
    rowContainer: {
        justifyContent: "flex-start",
        marginTop: 5,
        marginBottom: 5,
        flex: 1,
        margin:0
    },
    emptyText: {
        textAlign: "center",
        padding: 10,
        alignSelf: "center",
        flex: 1
    },
    dividerText: {
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#c4c3cb",
        flex: 1,
        alignItems: "center"
    }
});

export default ResultComponent;
