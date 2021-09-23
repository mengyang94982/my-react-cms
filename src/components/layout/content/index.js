import React from "react";

import { Switch,Route } from "react-router-dom";

import PrivateRouter from '@/components/PrivateRouter'

import Front from '@/views/home/home'
import User from '@/views/system/user'
import Role from '@/views/system/role'


export default function LayoutContent() {
	return (
		<Switch>
			<PrivateRouter exact path="/home" component={Front} />
			<PrivateRouter wxact path="/home/system/user" component={User} />
			<PrivateRouter exact path="/home/system/role" component={Role} />
		</Switch>
	)
}