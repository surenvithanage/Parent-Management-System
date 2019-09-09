import { connect } from "react-redux";
import AddParentClass from "../components/parents/AddParent";
import { addParentAsync, updateParentAsync } from "../actions/parentActions";

const mapStateToProps = state => ({
  currentParentList: state.parents.parentList
});

const mapDispatchToProps = (dispatch, ownprops) => ({
  onCreate: parent => dispatch(addParentAsync(parent)),
  onUpdate: parent => dispatch(updateParentAsync(parent)),
  onClose: () => ownprops.onCancelPopup()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddParentClass);
