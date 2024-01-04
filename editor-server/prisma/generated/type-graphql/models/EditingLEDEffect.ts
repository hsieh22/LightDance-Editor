import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { LEDEffect } from "../models/LEDEffect";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("EditingLEDEffect", {
  isAbstract: true
})
export class EditingLEDEffect {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  LEDEffectId?: number | null;

  user?: User;

  editingLEDEffect?: LEDEffect | null;
}
