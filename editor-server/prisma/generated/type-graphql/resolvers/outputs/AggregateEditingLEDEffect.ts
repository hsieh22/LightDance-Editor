import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EditingLEDEffectAvgAggregate } from "../outputs/EditingLEDEffectAvgAggregate";
import { EditingLEDEffectCountAggregate } from "../outputs/EditingLEDEffectCountAggregate";
import { EditingLEDEffectMaxAggregate } from "../outputs/EditingLEDEffectMaxAggregate";
import { EditingLEDEffectMinAggregate } from "../outputs/EditingLEDEffectMinAggregate";
import { EditingLEDEffectSumAggregate } from "../outputs/EditingLEDEffectSumAggregate";

@TypeGraphQL.ObjectType("AggregateEditingLEDEffect", {
  isAbstract: true
})
export class AggregateEditingLEDEffect {
  @TypeGraphQL.Field(_type => EditingLEDEffectCountAggregate, {
    nullable: true
  })
  _count!: EditingLEDEffectCountAggregate | null;

  @TypeGraphQL.Field(_type => EditingLEDEffectAvgAggregate, {
    nullable: true
  })
  _avg!: EditingLEDEffectAvgAggregate | null;

  @TypeGraphQL.Field(_type => EditingLEDEffectSumAggregate, {
    nullable: true
  })
  _sum!: EditingLEDEffectSumAggregate | null;

  @TypeGraphQL.Field(_type => EditingLEDEffectMinAggregate, {
    nullable: true
  })
  _min!: EditingLEDEffectMinAggregate | null;

  @TypeGraphQL.Field(_type => EditingLEDEffectMaxAggregate, {
    nullable: true
  })
  _max!: EditingLEDEffectMaxAggregate | null;
}
