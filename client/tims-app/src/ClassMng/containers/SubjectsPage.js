import { connect } from "react-redux";
import { SubjectList } from "../components/subjects/SubjectList";
import { deleteSubjectAsync } from "../actions/subjectActions";

const mapStateToProps = state => ({
  subjects: state.subjects.subjectList
});

const mapDispatchToProps = (dispatch, ownprops) => ({
  onDeleteSubject: subjectId => dispatch(deleteSubjectAsync(subjectId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectList);
