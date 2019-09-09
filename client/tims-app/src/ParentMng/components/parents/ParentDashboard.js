import React, { Component } from "react";
import { Card, CardHeader } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { Grid, Row, Col } from "react-bootstrap";
import { MDBTable, MDBTableHead, MDBTableBody, MDBDataTable } from 'mdbreact';
import Modal from 'react-responsive-modal';
import axios from 'axios';
import { any } from "prop-types";

class ParentDashboard extends Component {
    constructor() {
        super();
        this.state = {
            filter: '',
            id: '',
            fname: '',
            lname: '',
            studentid: '',
            email: '',
            phoneno: '',
            nic: '',
            parents: [],
            openparentcreate: false,
            openparentupdate: false,
            dataset: any
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleChange = event => {
        this.setState({ filter: event.target.value });
    };

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleUpdate(e) {
        e.preventDefault();
        const parent = {
            id: this.state.id,
            fname: this.state.fname,
            lname: this.state.lname,
            studentid: this.state.studentid,
            email: this.state.email,
            phoneno: this.state.phoneno,
            nic: this.state.nic
        }
        axios.post('http://localhost:5000/v1/parent/update', parent)
            .then(res => alert('Successfully Updated Parent : ' + res))
            .catch(err => {
                alert('Error Updating Parent : ' + err)
            });
        this.componentDidMount();
    }

    handleSubmit(e) {
        e.preventDefault();
        const parent = {
            fname: this.state.fname,
            lname: this.state.lname,
            studentid: this.state.studentid,
            email: this.state.email,
            phoneno: this.state.phoneno,
            nic: this.state.nic
        }
        axios.post('http://localhost:5000/v1/parent', parent)
            .then(res => alert('Successfully Created Parent : ' + res))
            .catch(err => {
                alert('Error Creating Parent : ' + err)
            });
    }

    componentDidMount() {
        axios.get('http://localhost:5000/v1/parent').then(
            data => {
                console.log('EMPLOYEE LIST RESPONSE : ' + JSON.stringify(data.data));
                this.setState({
                    parents: data.data
                });

                let posts = this.state.parents.map((post) => {
                    return (
                        {
                            id: post.id,
                            fname: post.fname,
                            lname: post.lname,
                            studentid: post.studentid,
                            email: post.email,
                            phoneno: post.phoneno,
                            nic: post.nic
                        }
                    )
                });
            }
        )
    }

    deleteParent(parentid) {
        const parent = {
            idToDelete: parentid
        }
        axios.post('http://localhost:5000/v1/parent/delete', parent).then(
            data => {
                console.log('DELETE RESPONSE : ' + JSON.stringify(data));
                alert('Successfully Deleted Record');
                this.componentDidMount();
            },
            err => {
                console.log('DELETE RESPONSE ERROR : ' + JSON.stringify(err));
            }
        )
    }

    onOpenModal1 = () => {
        this.setState({ openparentcreate: true });
    };

    onCloseModal1 = () => {
        this.setState({ openparentcreate: false });
        this.componentDidMount();
    };

    onOpenModal = (id) => {
        axios.get('http://localhost:5000/v1/parent/update/' + id).then(
            data => {
                console.log('FIND RESPONSE : ' + JSON.stringify(data));
                this.setState({
                    id: data.data.id,
                    fname: data.data.fname,
                    lname: data.data.lname,
                    studentid: data.data.studentid,
                    email: data.data.email,
                    phoneno: data.data.phoneno,
                    nic: data.data.nic
                });
            }
        )
        this.setState({ openparentupdate: true });
    };

    onCloseModal = () => {
        this.setState({ openparentupdate: false });
        this.componentDidMount();
    };


    render() {
        const { filter, parents } = this.state;
        const lowercasedFilter = filter.toLowerCase();
        const { openparentcreate } = this.state;
        const { openparentupdate } = this.state;
        // const filteredData = parents.filter(item => {
        //     return Object.keys(item).some(key =>
        //         item[key].toLowerCase().includes(lowercasedFilter)
        //     );
        // });
        const filteredData = parents.filter(item => {
            return Object.keys(item).some(key =>
                item[key]
            );
        });
        return (
            <Grid fluid>
                <Row>
                    <div className="col-md-12">
                        <Card className="class-dashboard-shortcut" style={{ marginTop: "25px" }}>
                            <CardHeader onClick={this.onOpenModal1}
                                avatar={
                                    <Avatar>
                                        <img className="w-100" src="/image/parent.svg" />
                                    </Avatar>
                                }
                                title="Add Parent"
                            />
                        </Card>
                        <hr />
                        <div class="row" style={{ marginBottom: "25px" }}>
                            <div class="col-lg-3"></div>
                            <div class="col-lg-6">
                                <div class="input-group custom-search-form">
                                    <input type="text" placeholder="Search" class="form-control" value={filter} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div class="col-lg-3"></div>
                        </div>
                        <div className="row">
                            <MDBTable style={{ marginLeft: "50px" }}>
                                <MDBTableHead>
                                    <tr>
                                        <th>Parent ID</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Student ID</th>
                                        <th>Email</th>
                                        <th>Phone Number</th>
                                        <th>NIC</th>
                                        <th>Options</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {
                                        filteredData.map(parent => {
                                            return (
                                                <tr key={parent.id}>
                                                    <td>{parent.fname}</td>
                                                    <td>{parent.lname}</td>
                                                    <td>{parent.studentid}</td>
                                                    <td>{parent.email}</td>
                                                    <td>{parent.email}</td>
                                                    <td>{parent.phoneno}</td>
                                                    <td>{parent.nic}</td>
                                                    <td>
                                                        <button className="btn btn-warning btn-sm" onClick={this.onOpenModal.bind(this, parent.id)} style={{ marginRight: '15px' }}> EDIT </button>
                                                        <button className="btn btn-danger  btn-sm" onClick={this.deleteParent.bind(this, parent.id)}> DELETE </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </MDBTableBody>
                            </MDBTable>
                        </div>
                    </div>
                    <Modal open={openparentcreate} onClose={this.onCloseModal1} center>
                        <h4>Create New Parent</h4>
                        <hr />
                        <form onSubmit={this.handleSubmit} style={{ width: '500px' }}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className='form-control form-control-lg'
                                    name="fname"
                                    onChange={this.handleInputChange}
                                    value={this.state.fname}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className='form-control form-control-lg'
                                    name="lname"
                                    onChange={this.handleInputChange}
                                    value={this.state.lname}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Student ID"
                                    className='form-control form-control-lg'
                                    name="studentid"
                                    onChange={this.handleInputChange}
                                    value={this.state.studentid}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className='form-control form-control-lg'
                                    value={this.state.email}
                                    name="email"
                                    onChange={this.handleInputChange}
                                    value={this.state.email}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className='form-control form-control-lg'
                                    name="phoneno"
                                    onChange={this.handleInputChange}
                                    value={this.state.phoneno}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="NIC"
                                    className='form-control form-control-lg'
                                    name="nic"
                                    onChange={this.handleInputChange}
                                    value={this.state.nic}
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">
                                    Create Parent
                                     </button>
                            </div>
                        </form>
                    </Modal>
                    {/* Update Form */}
                    <Modal open={openparentupdate} onClose={this.onCloseModal} center>
                        <h2>Update Parent</h2>
                        <hr />
                        <form onSubmit={this.handleUpdate} style={{ width: '700px' }}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className='form-control form-control-lg'
                                    name="fname"
                                    onChange={this.handleInputChange}
                                    value={this.state.fname}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className='form-control form-control-lg'
                                    name="lname"
                                    onChange={this.handleInputChange}
                                    value={this.state.lname}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Student ID"
                                    className='form-control form-control-lg'
                                    name="studentid"
                                    onChange={this.handleInputChange}
                                    value={this.state.studentid}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className='form-control form-control-lg'
                                    name="email"
                                    onChange={this.handleInputChange}
                                    value={this.state.email}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className='form-control form-control-lg'
                                    name="phoneno"
                                    onChange={this.handleInputChange}
                                    value={this.state.phoneno}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="NIC"
                                    className='form-control form-control-lg'
                                    name="nic"
                                    onChange={this.handleInputChange}
                                    value={this.state.nic}
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">
                                    Update Parent
                                     </button>
                            </div>
                        </form>
                    </Modal>
                </Row>
            </Grid>
        );
    }
}

export default ParentDashboard;
