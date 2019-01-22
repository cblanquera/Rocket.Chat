import {
	Avatars,
	ExportOperations,
	Messages,
	Reports,
	Rooms,
	Settings,
	Subscriptions,
	Uploads,
	UserDataFiles,
	Users,
	CustomSounds,
	Integrations,
	IntegrationHistory,
	Base as _Base,
	Permissions,
	Roles,
} from 'meteor/rocketchat:models';

Object.assign(RocketChat.models, {
	_Base,
	Avatars,
	ExportOperations,
	Messages,
	Reports,
	Rooms,
	Settings,
	Subscriptions,
	Uploads,
	UserDataFiles,
	Users,
	CustomSounds,
	Integrations,
	IntegrationHistory,
	Permissions,
	Roles,
});
