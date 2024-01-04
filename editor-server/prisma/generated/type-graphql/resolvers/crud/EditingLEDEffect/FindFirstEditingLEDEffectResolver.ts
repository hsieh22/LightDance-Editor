import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEditingLEDEffectArgs } from "./args/FindFirstEditingLEDEffectArgs";
import { EditingLEDEffect } from "../../../models/EditingLEDEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EditingLEDEffect)
export class FindFirstEditingLEDEffectResolver {
  @TypeGraphQL.Query(_returns => EditingLEDEffect, {
    nullable: true
  })
  async findFirstEditingLEDEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEditingLEDEffectArgs): Promise<EditingLEDEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).editingLEDEffect.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
