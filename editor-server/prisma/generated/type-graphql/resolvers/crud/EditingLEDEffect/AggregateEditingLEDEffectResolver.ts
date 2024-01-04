import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEditingLEDEffectArgs } from "./args/AggregateEditingLEDEffectArgs";
import { EditingLEDEffect } from "../../../models/EditingLEDEffect";
import { AggregateEditingLEDEffect } from "../../outputs/AggregateEditingLEDEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EditingLEDEffect)
export class AggregateEditingLEDEffectResolver {
  @TypeGraphQL.Query(_returns => AggregateEditingLEDEffect, {
    nullable: false
  })
  async aggregateEditingLEDEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEditingLEDEffectArgs): Promise<AggregateEditingLEDEffect> {
    return getPrismaFromContext(ctx).editingLEDEffect.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
