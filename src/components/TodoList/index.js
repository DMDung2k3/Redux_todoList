import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
// import { addTodo } from '../../redux/actions';
import { v4 as uuidV4 } from 'uuid';
import { useState } from 'react';
import { todoRemainingSelector } from '../../redux/selectors';
import TodoSlide from './TodoSlide';

export default function TodoList() {
    const [todoName, setTodoName] = useState('');
    const [priority, setPriority] = useState('Medium');
    const todoList = useSelector(todoRemainingSelector);
    // const searchText = useSelector(searchTextSelector)
    const dispatch = useDispatch();
    const handleInputChange = (e) => {
        console.log(e.target.value)
        setTodoName(e.target.value)
    }
    const handlePriorityChange = (value) => {
        setPriority(value)
    }
    const handleAddButtonClick = () => {
        //dispatch
        dispatch(
            TodoSlide.actions.addTodo({
            id: uuidV4(),
            name: todoName,
            priority: priority,
            completed: false,
        }))
        setTodoName('')
        setPriority('Medium')
    }
    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {todoList.map(todo => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        name={todo.name}
                        priority={todo.priority}
                        completed={todo.completed} />
                ))}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact>
                    <Input value={todoName} onChange={handleInputChange} />
                    <Select defaultValue="Medium" onChange={handlePriorityChange} value={priority}>
                        <Select.Option value='High' label='High'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>
                        <Select.Option value='Medium' label='Medium'>
                            <Tag color='blue'>Medium</Tag>
                        </Select.Option>
                        <Select.Option value='Low' label='Low'>
                            <Tag color='gray'>Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type='primary' onClick={handleAddButtonClick}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}