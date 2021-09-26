import React, { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import Checkbox from '../Checkbox';
import {
  Card,
  CardFooter,
  UlTodo,
  UlFooter,
  LiTodo,
  LiFooter,
  TodoItem,
  DeleteButton,
  DeleteIcon,
  Container,
  DragDropText,
  ItemsLeft,
  ClearButton,
  StyledInput,
  InputContainer,
} from './ListElements';

import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';
import deleteIcon from '../../assets/images/icon-cross.svg';

const INITIAL_TASKS = [
  { title: 'Jog around the park 3x', completed: false },
  { title: '2nd item', completed: false },
];

const List = () => {
  const [allItems, setAllItems] = useState(INITIAL_TASKS);
  const [displayList, setDisplayList] = useState(INITIAL_TASKS);
  const [currentFilter, setCurrentFilter] = useState('all');

  const isMobile = useMediaQuery({ query: `(max-width: 767px)` });

  const addInputRef = useRef();

  const toggleAll = () => {
    setDisplayList(allItems);
    setCurrentFilter('all');
  };
  const toggleActive = () => {
    setDisplayList(allItems.filter((item) => item.completed === false));
    setCurrentFilter('active');
  };
  const toggleCompleted = () => {
    setDisplayList(allItems.filter((item) => item.completed === true));
    setCurrentFilter('completed');
  };

  const handleClearAll = () => {
    setAllItems([]);
    setDisplayList([]);
  };

  const addNewTask = (event) => {
    if (event.key === 'Enter') {
      setAllItems([
        ...allItems,
        { title: addInputRef.current.value, completed: false },
      ]);
      setDisplayList([
        ...allItems,
        { title: addInputRef.current.value, completed: false },
      ]);

      addInputRef.current.value = '';
    }
    return;
  };

  const deleteItemHandler = (itemToRemove) => {
    setAllItems(allItems.filter((item) => item !== itemToRemove));
    setDisplayList(displayList.filter((item) => item !== itemToRemove));
  };

  const handleCheckbox = (item, idx) => {
    let temporaryList = displayList.slice();

    if (item.completed) {
      temporaryList[idx].completed = false;
      setDisplayList(temporaryList);
      setAllItems(temporaryList);
    } else {
      temporaryList[idx].completed = true;
      setDisplayList(temporaryList);
      setAllItems(temporaryList);
    }
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // create new reordered array
    const newArray = displayList.slice();
    newArray.splice(source.index, 1);
    newArray.splice(destination.index, 0, displayList[draggableId]);

    // update states
    setDisplayList(newArray);
    setAllItems(newArray);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Card>
        <InputContainer>
          <Checkbox disabledInput />
          <StyledInput
            type='text'
            placeholder='Create a new todo...'
            ref={addInputRef}
            onKeyUp={addNewTask}
            maxLength='150'
          ></StyledInput>
        </InputContainer>
      </Card>

      <Card>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <UlTodo ref={provided.innerRef} {...provided.droppableProps}>
              {displayList.map((item, idx) => (
                <Draggable key={idx} draggableId={'' + idx} index={idx}>
                  {(provided) => (
                    <Container
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <LiTodo>
                        <Checkbox
                          checkboxClicked={() => handleCheckbox(item, idx)}
                          checked={item.completed}
                        />
                        <TodoItem checked={item.completed}>
                          {item.title}
                        </TodoItem>
                        <DeleteButton onClick={() => deleteItemHandler(item)}>
                          <DeleteIcon src={deleteIcon} />
                        </DeleteButton>
                      </LiTodo>
                    </Container>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </UlTodo>
          )}
        </Droppable>

        {!isMobile && (
          <CardFooter>
            <ItemsLeft> {displayList.length} items left</ItemsLeft>
            <UlFooter>
              <LiFooter onClick={toggleAll} active={currentFilter === 'all'}>
                All
              </LiFooter>
              <LiFooter
                onClick={toggleActive}
                active={currentFilter === 'active'}
              >
                Active
              </LiFooter>
              <LiFooter
                onClick={toggleCompleted}
                active={currentFilter === 'completed'}
              >
                Completed
              </LiFooter>
            </UlFooter>
            <ClearButton onClick={handleClearAll}>Clear Completed</ClearButton>
          </CardFooter>
        )}

        {isMobile && (
          <CardFooter>
            <ItemsLeft> {displayList.length} items left</ItemsLeft>
            <ClearButton onClick={handleClearAll}>Clear Completed</ClearButton>
          </CardFooter>
        )}
      </Card>
      {isMobile && (
        <CardFooter>
          <UlFooter mobile>
            <LiFooter onClick={toggleAll} active={currentFilter === 'all'}>
              All
            </LiFooter>
            <LiFooter
              onClick={toggleActive}
              active={currentFilter === 'active'}
            >
              Active
            </LiFooter>
            <LiFooter
              onClick={toggleCompleted}
              active={currentFilter === 'completed'}
            >
              Completed
            </LiFooter>
          </UlFooter>
        </CardFooter>
      )}

      <DragDropText>Drag and drop to reorder list</DragDropText>
    </DragDropContext>
  );
};

export default List;
