import { connect } from "react-redux";
import AddTutionClassComponent from "../components/tutionClass/AddTutionClass";
import { addTutionClassAsync } from "../actions/tutionClassActions";

const mapStateToProps = state => ({
  subjectList: state.subjects.subjectList,
  gradeList: state.tutionClass.gradeList,
  tutionClassTypeList: state.tutionClass.tutionClassTypeList,
  teacherList: state.tutionClass.teacherList
});

const mapDispatchToProps = (dispatch, ownprops) => ({
  onCreate: tutionClass => dispatch(addTutionClassAsync(tutionClass)),
  onClose: () => ownprops.onCancelPopup()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTutionClassComponent);
