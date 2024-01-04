import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EditingLEDEffectOrderByWithRelationInput } from "../../../inputs/EditingLEDEffectOrderByWithRelationInput";
import { EditingLEDEffectWhereInput } from "../../../inputs/EditingLEDEffectWhereInput";
import { EditingLEDEffectWhereUniqueInput } from "../../../inputs/EditingLEDEffectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateEditingLEDEffectArgs {
  @TypeGraphQL.Field(_type => EditingLEDEffectWhereInput, {
    nullable: true
  })
  where?: EditingLEDEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EditingLEDEffectOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EditingLEDEffectOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EditingLEDEffectWhereUniqueInput, {
    nullable: true
  })
  cursor?: EditingLEDEffectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
