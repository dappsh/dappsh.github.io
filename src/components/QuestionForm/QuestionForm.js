import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import FormGroup from '@material-ui/core/FormGroup';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from '@material-ui/core/IconButton'

import DeleteIcon from '@material-ui/icons/DeleteForeverOutlined'

import { respondentOptions } from '../../utils/questionConstant'

import { 
  StyledDialog, 
  ColonText, 
  ButtonAction, 
  StyledDialogTitle,
  LabelTextField,
} from './QuestionForm.sc'

const QuestionForm = (props) => {
  const { 
    handleDeleteRespondentItem, 
    handleEnterAnswerOption, 
    handleClose,
    handleSave,
    handleOnchange,
    isOpen,
    handleChangeRespondent,
    isEditMode,
    questItem,
  } = props

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <StyledDialog 
        PaperProps={{ classes: { root: 'paper-class' } }}
        maxWidth="md" 
        fullScreen={fullScreen} 
        scroll="paper" 
        open={isOpen} 
        onClose={handleClose}
      >
        <StyledDialogTitle id="title">{isEditMode ? 'Edit Question' : 'Add New Question'}</StyledDialogTitle>
        <DialogContent dividers>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={2}>
              <LabelTextField>Question</LabelTextField>
            </Grid>
            <Grid item xs={1}>
              <ColonText>:</ColonText>
            </Grid>

            {/* question field */}
            <Grid item xs={9}>
              <TextField
                fullWidth
                multiline
                rows={4}
                value={questItem.question}
                name="question"
                onChange={handleOnchange(false)}
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Grid container direction="row" spacing={2}>
            <Grid item xs={2}>
              <LabelTextField>Respondent Options</LabelTextField>
            </Grid>
            <Grid item xs={1}>
              <ColonText>:</ColonText>
            </Grid>
            <Grid item xs={9}>
                {questItem?.respondent?.map((respond, index) => {
                  return (
                  <Grid container spacing={2} key={index}>
                    {/* respondent field */}
                    <Grid item md={4} xs={12} key={respond?.id}>
                      <TextField
                        select
                        fullWidth
                        variant="outlined"
                        name="optionValue"
                        className="respondentOptions"
                        value={respond.optionValue}
                        onChange={handleChangeRespondent(index)} 
                        SelectProps={{
                          native: true,
                        }}
                      >
                        {respondentOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                        ))}
                      </TextField>
                    </Grid>
                    
                    <Grid item md={8} xs={12}>
                      <Grid container spacing={1} direction="row">
                        <Grid item xs={10}>
                          <Tooltip 
                            arrow
                            placement="top-start"
                            title="please enter to add another option" 
                            disableHoverListener
                            >
                            <TextField
                              autoFocus={!isEditMode && index !== 0}
                              fullWidth
                              variant="outlined"
                              placeholder="Enter to add more answer option"
                              value={respond.answer}
                              name="answer"
                              onChange={handleChangeRespondent(index)}  
                              onKeyDown={e => {
                                if (e.keyCode === 13) {
                                  window.scrollTo(0, 600)
                                  e.preventDefault()
                                  handleEnterAnswerOption()
                                }
                              }}
                            />
                         </Tooltip>
                        </Grid>
                        <Grid item xs={2}>
                          <IconButton disabled={questItem.respondent.length === 1} id={index} onClick={() => handleDeleteRespondentItem(questItem.respondent, respond.id)}>
                            <DeleteIcon />
                          </IconButton>
                        </Grid>
                      </Grid>

                    </Grid>
                  </Grid>
                    )
                  })
                }
                
              {/* checkbox */}
              <FormGroup row>
                <FormControlLabel
                  label={<LabelTextField>Allow "None of the above"</LabelTextField>}
                  control={<Checkbox name="allowNone" checked={questItem.allowNone} onChange={handleOnchange(true)} />}
                />
                <FormControlLabel
                  label={<LabelTextField>Shuffle the order</LabelTextField>}
                  control={<Checkbox  name="shuffleOrder" checked={questItem.shuffleOrder} onChange={handleOnchange(true)} />}
                />
              </FormGroup>
            </Grid>
          </Grid>    
        </DialogContent>
        
        <DialogActions>
          <ButtonAction onClick={handleClose} variant="contained">Cancel</ButtonAction>
          <ButtonAction onClick={() => handleSave(isEditMode, questItem.id )} variant="contained">Save</ButtonAction>
        </DialogActions>  

      </StyledDialog>
    </div>
  );
}


QuestionForm.defaultProps = {
  handleDeleteRespondentItem: () => {},
  handleEnterAnswerOption: () => {},
  questItem: {},
  handleClose: () => {},
  handleSave: () => {},
  handleOnchange: () => {},
  handleChangeRespondent: () => {},
  setQuestionText: () => {},
  isOpen: false,
  isEditMode: false,
}

QuestionForm.propTypes = {
  handleDeleteRespondentItem: PropTypes.func,
  handleEnterAnswerOption: PropTypes.func,
  questItem: PropTypes.instanceOf(Object),
  handleClose: PropTypes.func,
  handleSave: PropTypes.func,
  handleOnchange: PropTypes.func,
  handleChangeRespondent: PropTypes.func,
  setQuestionText: PropTypes.func,
  isOpen: PropTypes.bool,
  isEditMode: PropTypes.bool,
}

export default QuestionForm


