import { connect } from "react-redux";
import AddSubjectComponent from "../components/subjects/AddSubject";
import { addSubjectAsync, updateSubjectAsync } from "../actions/subjectActions";

const mapStateToProps = state => ({
  currentSubjectList: state.subjects.subjectList
});

const mapDispatchToProps = (dispatch, ownprops) => ({
  onCreate: subject => dispatch(addSubjectAsync(subject)),
  onUpdate: subject => dispatch(updateSubjectAsync(subject)),
  onClose: () => ownprops.onCancelPopup()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSubjectComponent);
