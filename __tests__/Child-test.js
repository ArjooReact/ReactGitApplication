import 'react-native'
import React   from 'react'
import ChildComponent from '../components/ChildComponent'
import renderer from 'react-test-renderer'
import { TestScheduler } from 'jest'


test('Childcomponent snapshot',()=>{

    const snap = renderer.create(
        <ChildComponent></ChildComponent>
    ).toJSON()
    expect(snap).toMatchSnapshot();
})