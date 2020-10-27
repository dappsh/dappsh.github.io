import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid'
import { useSnackbar } from 'notistack';

import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import RootRef from "@material-ui/core/RootRef";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/DeleteSweep";

import QuestionForm from '../../components/QuestionForm/QuestionForm'

import { 
  Wrapper, 
  NoData,
  TitleText, 
  AddButton, 
  AddIcon, 
  NumberWrapper, 
  ActionButtonWrapper,
  HeaderWrapper,
} from './QuestionSurvey.sc'

import { 
  addNewQuestion as addNewQuestionAction, 
  resetQuestionList as resetQuestionListAction 
} from '../../redux/actions/questionList';



const defaultQuestionData = {
  id: 1,
  question: '',
  respondent: [{
    id: 0,
    optionValue: '0',
    answer: ''
  }],
  allowNone: false,
  shuffleOrder: false,
}


const QuestionSurvey = (props) => {

  const { enqueueSnackbar } = useSnackbar();

  const [isQuestionDialogOpen, setIsQuestionDialogOpen] = useState(false)
  const [questItem, setQuestItem] = useState(defaultQuestionData)
  const [isEditMode, setIsEditMode] = useState(false)
  
  useEffect(() => {
      if (!isEditMode) {
        setQuestItem({
          id: 1,
          question: '',
          respondent: [{
            id: 0,
            optionValue: '0',
            answer: ''
          }],
          allowNone: false,
          shuffleOrder: false,
        })
      }

      if (!isQuestionDialogOpen) {
        setIsEditMode(false)
      }

  }, [isEditMode, isQuestionDialogOpen])

  // handle onChage respondent data
  const handleChangeRespondent = (index) => e  => {
    const updateRespondent = questItem.respondent;
    updateRespondent[index][e.target.name] = e.target.value;
    setQuestItem({...questItem, respondent: [...updateRespondent] })
  }

  // handle onChage data quesiton line
  const handleOnchange = (isCheckbox) => e =>  {
    const { name, value, checked = false } = e.target
    const questItemUpdate = {...questItem}
    questItemUpdate[name] = !isCheckbox ? value : checked
    setQuestItem(questItemUpdate)
  }

  // handle add new respondent field
  const handleEnterAnswerOption = () => {
    // i use getTime() as id value because user can enter in any index respondent field
    // so it will make it easer when deleting the respondent item by filter by id
    const id = new Date().getTime()
    const respondentObj = {
      id,
      optionValue: '0',
      answer: ''
    }

    const respondentArr = [...questItem.respondent, respondentObj] 
    setQuestItem({...questItem, respondent: respondentArr })
  }

  // handle delete respondent data
  const handleDeleteRespondentItem = (data, id) => {
    if (data.length === 1) return
    const updateData = questItem.respondent.filter(item => item.id !== id)
    return setQuestItem({...questItem, respondent: updateData })
  };


  // reordering result list
  const reorder = (questionList, startIndex, endIndex) => {
    const result = Array.from(questionList);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  // styling on dragging
  const getItemStyle = (isDragging, draggableStyle) => ({
    ...draggableStyle,
    ...(isDragging && {
      background: "rgb(235,235,235)"
    })
  });

  // handle reorder data
  const handleHasDragged = result => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      props.questionData,
      result.source.index,
      result.destination.index
    );

    // replace quesitons list with new order
    props.setQuestionList(items)
  }

  // handle submit question
  const handleSave = async (isEdit, id) => {
    const isNotValid = validateEmptyState()
    
    if (isNotValid) {
      return enqueueSnackbar('Please fill the empty field', { variant: 'error' })
    } 

    if (isEdit) {
      const questionArray = [...props.questionData]
      const questionIndex = props.questionData.findIndex((qst => qst.id === id));
      questionArray[questionIndex] = questItem
      props.setQuestionList(questionArray)
    } else {
      const newData = {...questItem}
      const id = props.questionData.length + 1
      newData['id'] = id.toString()
      props.addNewQuestion(newData)
    }

    await enqueueSnackbar('Question Added !', { variant: 'success' })
    setIsQuestionDialogOpen(false)

  }

  const handleCloseDialog = () => {
    setIsQuestionDialogOpen(false)
  }

  // delete question item list
  const handleDeleteQuestion = (id) => {
    const newQuestionData = props.questionData.filter(item => item.id !== id)
    props.setQuestionList(newQuestionData);
   };
 
  //  open dialog to edit question
  const handleEditQuestionItem = (item) => {
    setQuestItem(item)
    setIsEditMode(true)
    setIsQuestionDialogOpen(true)
  }

  const validateEmptyState = () => {
    const isNotValid = questItem.question === '' || questItem.respondent.some(resp => resp.answer === '');
    return isNotValid
  }

  return (
    <Wrapper>
      <HeaderWrapper container justify="space-between">
        <Grid item>
          <TitleText variant="h5">
            Question Survey
          </TitleText>
        </Grid>
        <Grid item>
          <AddButton 
            onClick={() => {
              setIsQuestionDialogOpen(true)
            }
            } 
            variant="contained"
            startIcon={<AddIcon />}
          >
            Add Question
          </AddButton>
        </Grid>
      </HeaderWrapper>

      
      
      <QuestionForm 
        handleClose={handleCloseDialog}
        handleChangeRespondent={handleChangeRespondent}
        handleDeleteRespondentItem={handleDeleteRespondentItem}
        handleEnterAnswerOption={handleEnterAnswerOption}
        handleOnchange={handleOnchange}
        handleSave={handleSave}
        isEditMode={isEditMode}
        isOpen={isQuestionDialogOpen}
        questItem={questItem}
      />

      {props.questionData.length === 0 && 
        <NoData>
          <img src="https://assets.getcraft.com/images/asset-q2-2018/not-found-icon.svg" alt="empty" />
          <p>Question box is empty</p>
        </NoData> 
      }

      {props.questionData.length > 0 &&    <div>
        <DragDropContext handleHasDragged={handleHasDragged}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <RootRef rootRef={provided.innerRef}>
              <List>
                {props.questionData.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <ListItem
                        alignItems="center"
                        ContainerComponent="li"
                        divider
                        ContainerProps={{ ref: provided.innerRef }}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <NumberWrapper>
                          <div>{`Question #${index + 1}`}</div>
                        </NumberWrapper>
                        
                        <ListItemText
                          primary={item.question}
                          secondary={item.order}
                        />

                        <ListItemSecondaryAction>
                          <ActionButtonWrapper onClick={() => handleEditQuestionItem(item)}>
                            <EditIcon />
                          </ActionButtonWrapper>
                          <ActionButtonWrapper onClick={() => handleDeleteQuestion(item.id)}>
                            <DeleteIcon />
                          </ActionButtonWrapper>
                        </ListItemSecondaryAction>
                      </ListItem>
                    )}
                  </Draggable>
                ))}
              </List>
            </RootRef>
          )}
        </Droppable>
      </DragDropContext>
                      
    </div>
   }
    </Wrapper>
  );

}


const mapStateToProps = state => {
  return {
    questionData: state.questionList.questions,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewQuestion: (value) => dispatch(addNewQuestionAction(value)),
    setQuestionList: (value) =>  dispatch(resetQuestionListAction(value))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuestionSurvey)


