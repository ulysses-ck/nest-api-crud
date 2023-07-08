import {
	IsString,
	IsNotEmpty,
	MinLength,
	IsOptional,
	IsIn,
} from 'class-validator';
import { TaskStatus } from '../task.entity';

export class CreateTaskDto {
	@IsString()
	@IsNotEmpty()
	@MinLength(5)
	title: string;

	@IsString()
	description: string;
}
export class UpdateTaskDto {
	@IsString()
	@IsOptional()
	title?: string;

	@IsString()
	@IsOptional()
	description?: string;

	@IsString()
	@IsOptional()
	@IsIn([TaskStatus.DONE, TaskStatus.PENDING, TaskStatus.IN_PROGRESS])
	status?: TaskStatus;
}
