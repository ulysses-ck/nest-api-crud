import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	Delete,
	Patch,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
	constructor(private taskService: TasksService) {}

	@Get()
	helloWorld() {
		return this.taskService.getAllTask();
	}

	@Post()
	createTask(@Body() newTask: CreateTaskDto) {
		return this.taskService.createTask(newTask.title, newTask.description);
	}

	@Delete(':id')
	deletTask(@Param('id') id: string) {
		return this.taskService.deleteTask(id);
	}

	@Patch(':id')
	updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDto) {
		return this.taskService.updateTask(id, updatedFields);
	}
}
